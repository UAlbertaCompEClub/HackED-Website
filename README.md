# HackED/HackED Beta Websites

### Getting started 

When running the site locally you may wish to set up a python virtual environment.

To install all the base apps run:
```
pip install -r requirements.txt
```

Note to update already installed apps use:
```
pip install -r requirements.txt --upgrade
```

For the frontend you will also need to run from inside the ```frontend``` folder:
```
yarn install
```

## Running in different envs

Make sure to set your ```DJANGO_SETTINGS_MODULE``` env var to either HackED.settings or HackED.settings.prod depending on what env you are running in.

or run the server using 
```
python manage.py runserver --settings=HackED.settings
```

Depending on how messed up your python env is you might need
```
py -3 manage.py runserver --settings=HackED.settings
```

Make sure to start the frontend while testing with:
```
cd frontend
yarn start
```

## Tests

Run Tests locally using:

```
python manage.py test --debug-mode
```
