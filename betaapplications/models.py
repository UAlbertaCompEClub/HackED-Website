from django.db import models
from django.contrib.auth.models import User

class School(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class HackEDBetaApplication(models.Model):
    MALE = 'male'
    FEMALE = 'female'
    PNTS = 'prefer_not_to_say'
    OTHER = 'other'
    GENDERS = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
        (PNTS, 'Prefer Not to Say'),
        (OTHER, 'Other'),
    )

    Y2018 = '2018'
    Y2019 = '2019'
    Y2020 = '2020'
    Y2021 = '2021'
    Y2022 = '2022'
    Y2023 = '2023'
    Y2024 = '2024'
    Y2025 = '2025'
    OTHER = 'other'
    GRAD_YEARS = (
        (Y2018, '2018'),
        (Y2019, '2019'),
        (Y2020, '2020'),
        (Y2021, '2021'),
        (Y2022, '2022'),
        (Y2023, '2023'),
        (Y2024, '2024'),
        (Y2025, '2025'),
        (OTHER, 'Other')
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    school = models.ForeignKey(School, blank=True, on_delete=models.CASCADE)
    dob = models.DateField()
    faculty = models.TextField(max_length=200, blank=True, null=True)
    graduation_year = models.CharField(max_length=20, choices=GRAD_YEARS,)
    gender = models.CharField(max_length=20, choices=GENDERS,)
    inspiration = models.TextField(max_length=10000, blank=True, null=True)
    dietary_restrictions = models.TextField(max_length=2000, blank=True, null=True)
    accommodations = models.TextField(max_length=2000, blank=True, null=True)
    paid = models.BooleanField(default=False)
    hackathons_attended = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    hidden = models.BooleanField(default=False)
