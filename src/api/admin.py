  
import os
from flask_admin import Admin
from .models import db, User, Profile, Muscles, Exercises, Muscle_group, Predetermined_routines, Tracker_pred,Free_routine, Tracker_free
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Profile, db.session))
    admin.add_view(ModelView(Exercises, db.session))
    admin.add_view(ModelView(Muscles, db.session))
    admin.add_view(ModelView(Free_routine, db.session))
    admin.add_view(ModelView(Tracker_free, db.session))
    admin.add_view(ModelView(Muscle_group, db.session))
    admin.add_view(ModelView(Predetermined_routines, db.session))
    admin.add_view(ModelView(Tracker_pred, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))