from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import updateLaptop, getLaptopDetail, deleteLaptop, getLaptopsList, createLaptop, predictPrice
# Create your views here.


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/laptops/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of laptops'
        },
        {
            'Endpoint': '/laptops/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single announce object'
        },
        {
            'Endpoint': '/laptops/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new announce with data sent in post request'
        },
        {
            'Endpoint': '/laptops/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing announce with data sent in post request'
        },
        {
            'Endpoint': '/laptops/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting announce'
        }
    ]
    return Response(routes)


# /laptops GET
# /laptops POST
# /laptops/<id> GET
# /laptops/<id> PUT
# /laptops/<id> DELETE

@api_view(['GET', 'POST'])
def getLaptops(request):

    if request.method == 'GET':
        return getLaptopsList(request)

    if request.method == 'POST':
        return createLaptop(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getLaptop(request, pk):

    if request.method == 'GET':
        return getLaptopDetail(request, pk)

    if request.method == 'PUT':
        return updateLaptop(request, pk)

    if request.method == 'DELETE':
        return deleteLaptop(request, pk)
    

@api_view(['POST'])
def predictPriceView(request):
        
    return predictPrice(request)
