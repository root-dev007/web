# Generated by Django 2.2.4 on 2019-10-23 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quests', '0015_quest_override_background'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quest',
            name='override_background',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
