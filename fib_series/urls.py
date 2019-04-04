from django.conf.urls import url
from fib_series.views import *


urlpatterns = [
    url(r'', Fibonaaci.as_view(), name='fibonacci'),
]