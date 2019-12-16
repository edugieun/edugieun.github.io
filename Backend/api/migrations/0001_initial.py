# Generated by Django 2.1.1 on 2019-12-16 00:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Algorithm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prob_num', models.IntegerField()),
                ('prob_source', models.CharField(max_length=10)),
                ('prob_name', models.CharField(max_length=30)),
                ('prob_diff', models.CharField(max_length=5)),
                ('prob_category', models.CharField(max_length=20)),
                ('code_url', models.TextField()),
            ],
        ),
    ]
