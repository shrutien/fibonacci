from django.test import TestCase
# from .views import Fibonaaci
# Create your tests here.
from numpy import matrix
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "fibonacci.settings")

import unittest

class TestFibonacciFunctions(unittest.TestCase):
    def test_fibonacci(self):
        expected_result = 8
        fib = ((matrix([[1, 1], [1, 0]])) ** (int(6) - 1))[0,0]
        self.assertEqual(expected_result,fib, "Case1 unit test")

if __name__ == '__main__' :
    unittest.main()