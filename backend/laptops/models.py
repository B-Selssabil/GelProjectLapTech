from django.db import models
from accounts.models import UserAccount


class Laptop(models.Model):
    seller = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    company = models.CharField(max_length=100, null=True, blank=True)
    model = models.CharField(max_length=100, null=True, blank=True)
    operating_system = models.CharField(max_length=100, null=True, blank=True)
    processor_company = models.CharField(max_length=100, null=True, blank=True)
    processor_model = models.CharField(max_length=100, null=True, blank=True)
    graphic_card = models.CharField(max_length=100, null=True, blank=True)
    display = models.CharField(max_length=100, null=True, blank=True)
    memory = models.CharField(max_length=100, null=True, blank=True)
    storage = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.company} {self.model}"


# class LaptopImage(models.Model):
#     laptop = models.ForeignKey(Laptop, on_delete=models.CASCADE)
#     image = models.ImageField(upload_to='laptop_images/')


class FavoriteLaptop(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    laptop = models.ForeignKey(Laptop, on_delete=models.CASCADE)
    added_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'laptop')


class Rating(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    laptop = models.ForeignKey(Laptop, on_delete=models.CASCADE)
    stars = models.IntegerField()

    class Meta:
        unique_together = ('user', 'laptop')


class Comment(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    laptop = models.ForeignKey(Laptop, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.first_name} on {self.laptop.company} {self.laptop.model}"
    



    


