# Generated by Django 4.2.6 on 2023-10-29 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manga', '0004_manga_uid'),
    ]

    operations = [
        migrations.AddField(
            model_name='manga',
            name='is_nsfw',
            field=models.BooleanField(default=False),
        ),
    ]