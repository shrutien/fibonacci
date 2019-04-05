from django.db import models

# Create your models here.

class FibonacciNumbers(models.Model):
    fib_number = models.IntegerField()
    fib_result = models.IntegerField()

    class Meta:
        app_label = 'fib_series'

    def __unicode__(self):
        return u'{0}'.format(self.fib_number)

    def __str__(self):
        return u'{0}'.format(self.fib_number)


