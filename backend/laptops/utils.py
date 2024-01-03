from rest_framework.response import Response
from .models import Laptop
from .serializers import LaptopSerializer
import pickle
import pandas as pd


def getLaptopsList(request):
    laptops = Laptop.objects.all().order_by('-updated')
    serializer = LaptopSerializer(laptops, many=True)
    return Response(serializer.data)


def getLaptopDetail(request, pk):
    laptop = Laptop.objects.get(id=pk)
    serializer = LaptopSerializer(laptop, many=False)
    return Response(serializer.data)


def createLaptop(request):
    data = request.data
    # print('data: ', data)
    laptop = Laptop.objects.create(
        seller_id=data['seller_id'],
        company=data['company'],
        model=data['model'],
        operating_system=data['operating_system'],
        processor_company=data['processor_company'],
        processor_model=data['processor_model'],
        graphic_card=data['graphic_card'],
        display=data['display'],
        memory=data['memory'],
        storage=data['storage'],
        description=data['description'],
        price=data['price'],
        image=data['image'],
        updated=data['updated']
    )
    serializer = LaptopSerializer(laptop, many=False)
    return Response(serializer.data)


def updateLaptop(request, pk):
    data = request.data
    laptop = Laptop.objects.get(id=pk)
    serializer = LaptopSerializer(instance=laptop, data=data)
    # if serializer.is_valid():
    #     serializer.save()

    return serializer.data


def deleteLaptop(request, pk):
    laptop = Laptop.objects.get(id=pk)
    laptop.delete()
    return Response('Laptop was deleted!')


def predictPrice(request):
    data = request.data
    with open('model.pkl', 'rb') as file:
        loaded_model = pickle.load(file)
    new_data = getValues(data)
    price_euro = round(loaded_model.predict([new_data])[0], 2)
    result = price_euro * 210
    return Response(f'Price is {result} DA')



def getValues(data):

    companies = pd.read_csv('Data/Companies.csv')
    cpus = pd.read_csv('Data/CPUs.csv')
    gpus = pd.read_csv('Data/GPUs.csv')
    memoTypes = pd.read_csv('Data/Memo_Types.csv')
    oprSys = pd.read_csv('Data/OpSys.csv')
    screenResolutions = pd.read_csv('Data/ScreenResolutions.csv')
    typeNames = pd.read_csv('Data/TypeNames.csv')

    companies.set_index('Company', inplace=True)
    cpus.set_index('Cpu', inplace=True)
    gpus.set_index('Gpu', inplace=True)
    memoTypes.set_index('Memo_Type', inplace=True)
    oprSys.set_index('OpSys', inplace=True)
    screenResolutions.set_index('ScreenResolution', inplace=True)
    typeNames.set_index('TypeName', inplace=True)

    result = [companies.loc[data['company']].Value, typeNames.loc[data['typeName']].Value,data['inches'],screenResolutions.loc[data['resolution']].Value, cpus.loc[data['cpu']].Value,
               data['ram'],gpus.loc[data['gpu']].Value,oprSys.loc[data['opSystem']].Value, data['weight'],memoTypes.loc[data['memoType']].Value, 
               data['memoSize']]

    return result