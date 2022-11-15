from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, Table, Float
from sqlalchemy.orm import declarative_base, relationship

db = SQLAlchemy()

class User(db.Model,SerializerMixin):
    __tablename__ = "user_table"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_custom_name = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=True, nullable=False)
    user_birthday = db.Column(db.Date, unique=True, nullable=False)
    height = db.Column(db.Float, unique=True, nullable=False)
    weight = db.Column(db.Float, unique=True, nullable=False)
    bmi = db.Column(db.Float, unique=True, nullable=False)
    muscle_mass = db.Column(db.Float, unique=True, nullable=False)
    predtracker=db.relationship("Tracker_pred", back_populates="user")
    freetracker=db.relationship("Tracker_free", back_populates="freeuser")

    def __repr__(self):
        return f'{self.user_custom_name}'

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_custom_name,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "birthday": self.user_birthday,
            "height": self.height,
            "weight": self.weight,
            "body_fat": self.bmi,
            "muscle:mass": self.muscle_mass,
        }


class Exercises(db.Model,SerializerMixin):
    __tablename__ = "exercises_table"
  
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    muscle_id = db.Column(db.Integer, db.ForeignKey("muscles_table.id"))
    muscle = db.relationship("Muscles", back_populates="excercise")

    def __repr__(self):
        return f'{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
        }
    
class Muscles(db.Model,SerializerMixin):
    __tablename__ = "muscles_table"
    id = db.Column(db.Integer, primary_key=True)
    muscle_name = db.Column(db.String(120), unique=True, nullable=False)
    excercise = db.relationship("Exercises", back_populates="muscle")
    groupid = db.Column(db.Integer, db.ForeignKey("group_table.id"))
    muscle_group = db.relationship("Muscle_group", back_populates="muscles")
    free_routines = db.relationship("Free_routine", back_populates="muscles_in_routine")

    def __repr__(self):
        return f'{self.muscle_name}'

    def serialize(self):
        return {
            "id": self.id,
            "muscles": self.muscle_name,
         
        }

class Free_routine(db.Model,SerializerMixin):
    __tablename__ = "freeroutine_table"
    id = db.Column(db.Integer, primary_key=True)
    routine_name = db.Column(db.String(120), unique=False, nullable=False)
    description= db.Column(db.String(500),unique=False)
    routine_id = db.Column(db.Integer, db.ForeignKey("muscles_table.id"))
    muscles_in_routine=db.relationship("Muscles", back_populates="free_routines")
    track_id=db.Column(db.Integer, db.ForeignKey("trackerfree_table.id"))
    track_free=db.relationship("Tracker_free", back_populates="routine")

    def __repr__(self):
        return f'{self.routine_name}'
    
    def serialize(self):
        return {
            "id":self.id,
            "routine_name":self.routine_name,
        }

class Tracker_free(db.Model,SerializerMixin):
    __tablename__ = "trackerfree_table"
    id = db.Column(db.Integer, primary_key=True)
    total_distance=db.Column(db.Float, unique=False, nullable=False)
    burnt_cals=db.Column(db.Float, unique=False, nullable=False)
    date = db.Column(db.Date, unique=True, nullable=False)
    duration = db.Column(db.Float, unique=False, nullable=False)
    avg_bpm = db.Column(db.Float, unique=False, nullable=False)
    routine=db.relationship("Free_routine", back_populates="track_free")
    freeuser_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    freeuser = db.relationship("User", back_populates="freetracker")

    def __repr__(self):
        return f'Rutina {self.date}'
    
    def serialize(self):
        return {
            "id":self.id,
            "date":self.date,
            "total_distance":self.total_distance,
            "burnt_cals":self.burnt_cals,
            "duration": self.duration,
            "avg_bpm": self.avg_bpm,
        }

class Muscle_group(db.Model,SerializerMixin):
    __tablename__ = "group_table"
    id = db.Column(db.Integer, primary_key=True)
    muscle_group = db.Column(db.String(120), unique=True, nullable=False)
    muscles = db.relationship("Muscles", back_populates="muscle_group")
    routine_names = db.relationship("Predetermined_routines", back_populates="muscles_in_da_group")

    def __repr__(self):
        return f'{self.muscle_group}'

    def serialize(self):
        return {
            "id": self.id,
            "muscle_group": self.muscle_group,
        }

class Predetermined_routines(db.Model,SerializerMixin):
    __tablename__ = "predeterminedroutines_table"
    id = db.Column(db.Integer, primary_key=True)
    routine_name = db.Column(db.String(120), unique=False, nullable=False)
    description= db.Column(db.String(500),unique=False)
    routine_id = db.Column(db.Integer, db.ForeignKey("group_table.id"))
    muscles_in_da_group=db.relationship("Muscle_group", back_populates="routine_names")
    track_id=db.Column(db.Integer, db.ForeignKey("trackerpred_table.id"))
    track_pred=db.relationship("Tracker_pred", back_populates="routine_name")
   
    def __repr__(self):
        return f'{self.routine_name}'
    
    def serialize(self):
        return {
            "id":self.id,
            "routine_name":self.routine_name,
            "description": self.description,
        }
    
class Tracker_pred(db.Model,SerializerMixin):
    __tablename__ = "trackerpred_table"
    id = db.Column(db.Integer, primary_key=True)
    total_distance=db.Column(db.Float, unique=False, nullable=False)
    burnt_cals=db.Column(db.Float, unique=False, nullable=False)
    date = db.Column(db.Date, unique=True, nullable=False)
    duration = db.Column(db.Float, unique=False, nullable=False)
    avg_bpm = db.Column(db.Float, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    user = db.relationship("User", back_populates="predtracker")
    routine_name=db.relationship("Predetermined_routines", back_populates="track_pred")

    def __repr__(self):
        return f'Rutina {self.date}'
    
    def serialize(self):
        return {
            "id":self.id,
            "date":self.date,
            "total_distance":self.total_distance,
            "burnt_cals":self.burnt_cals,
            "duration": self.duration,
            "avg_bpm": self.avg_bpm,
            
        }
