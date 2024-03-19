from django.db import models


# Create your models here.
class Produtor(models.Model):
    nome = models.CharField('Nome',max_length=50)
    cpf = models.CharField('Cpf',max_length=11)
    email = models.CharField('Email',max_length=50)
    senha = models.CharField('Senha',max_length=20)

