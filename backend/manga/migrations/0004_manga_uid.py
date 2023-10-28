# Generated by Django 4.2.6 on 2023-10-28 20:37

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('manga', '0003_manga_liked_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='manga',
            name='uid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
    ]