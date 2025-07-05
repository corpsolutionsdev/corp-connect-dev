from django.db import models

# Create your models here.

# class Address(models.Model):
#     cep = models.CharField(unique=True, max_length=9, verbose_name='CEP', help_text='CEP')
#     street = models.CharField(max_length=255, verbose_name='Rua, Avenida...', help_text='Rua, Avenida...')
#     number = models.PositiveIntegerField(verbose_name='Número', help_text='Número', blank=True, null=True)
#     complement = models.CharField(max_length=255, verbose_name='Complemento', help_text='Complemento')
#     neighborhood = models.CharField(max_length=255, verbose_name='Bairro', help_text='Bairro' )
#     city = models.CharField(max_length=255, verbose_name='Cidade', help_text='Cidade')
#     state = models.CharField(max_length=255, verbose_name='Estado', help_text='Estado')
#     uf = models.CharField(max_length=2, verbose_name='UF', help_text='UF')

#     def __str__(self):
#         return f"{self.city}-{self.uf}"

#     class Meta:
#         ordering = ['uf']
#         verbose_name = 'Endereço'
#         verbose_name_plural = 'Endereços'
    
# class Enterprise(model.Model):
#     cnpj = models.CharField(unique=True, max_length=18, verbose_name='CNPJ', help_text='CNPJ')
#     company_name = models.CharField(max_length=255, verbose_name='Razão Social', help_text='Razão Social')
#     trade_name = models.CharField(max_length=255, verbose_name='Nome Fantasia', help_text='Nome Fantasia')
#     address = models.ForeignKey(Address, on_delete=models.CASCADE, verbose_name='Endereço')

#     def __str__(self):
#         return f"{self.company_name}"

#     class Meta:
#         ordering = ['name']
#         verbose_name = 'Empresa'
#         verbose_name_plural = 'Empresas'