from rest_framework import serializers
from .models import Laptop, FavoriteLaptop, Rating, Comment


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = '__all__'


class FavoriteLaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteLaptop
        fields = '__all__'


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'