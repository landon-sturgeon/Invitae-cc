# Clonevitae
Invitae Variant Coding Assignment 

Used Python/Django for the backend (as well as Django templates for barebones frontend rendering).  
Used basic React for frontend

# To Run
pip install -r requirements.txt <br />
npm install <br />
cd into the root of the project directory <br />
python manage.py makemigrations<br />
python manage.yp migrate<br />
python manage.py seed_data<br />
python manage.py runserver <br />
npm start <br/>

Back end is deployed at 127.0.0.1:8000
React Frontend is deployed at http://localhost:3000/

# To Update Database
pipenv shell <br />
python manage.py seed_data <br />

# To Test
python manage.py test

TODO<br />
[] Deploy to Heroku<br />
[] Fixed size of autocomplete dropdown<br />
[] add a onClick binding to the autocomplete dropdown
[] format the resulting table of the gene variants to be pretty
