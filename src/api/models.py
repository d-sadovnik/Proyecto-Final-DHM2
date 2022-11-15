from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, Table, Float
from sqlalchemy.orm import declarative_base, relationship

db = SQLAlchemy()


class User(db.Model, SerializerMixin):
    __tablename__ = "user_table"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_custom_name = db.Column(db.String(80), unique=False, nullable=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    profile = db.relationship(
        "Profile", back_populates="user_custom_name", uselist=False)
    predtracker = db.relationship("Tracker_pred", back_populates="user")
    freetracker = db.relationship("Tracker_free", back_populates="freeuser")

    def __repr__(self):
        return f'{self.user_custom_name}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
        }


class Profile(db.Model, SerializerMixin):
    __tablename__ = "profile_table"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    age = db.Column(db.Integer, unique=False, nullable=False)
    height = db.Column(db.Float, unique=False, nullable=False)
    weight = db.Column(db.Float, unique=False, nullable=False)
    bmi = db.Column(db.Float, unique=False, nullable=False)
    fat_percentage = db.Column(db.Float, unique=False, nullable=False)
    user_custom_name = db.relationship("User", back_populates="profile")

    def __repr__(self):
        return f'{self.user_custom_name}'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "age": self.age,
            "height": self.height,
            "weight": self.weight,
            "bmi": slef.bmi,
            "fat_percentage": self.fat_percentage,
        }


class Exercises(db.Model, SerializerMixin):
    __tablename__ = "exercises_table"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    burnt_calories = db.Column(db.Float, unique=False, nullable=False)
    muscle_id = db.Column(db.Integer, db.ForeignKey("muscles_table.id"))
    muscle = db.relationship("Muscles", back_populates="excercise")

    def __repr__(self):
        return f'{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "burnt_calories": self.burnt_calories,
        }


class Muscles(db.Model, SerializerMixin):
    __tablename__ = "muscles_table"
    id = db.Column(db.Integer, primary_key=True)
    muscle_name = db.Column(db.String(120), unique=True, nullable=False)
    excercise = db.relationship("Exercises", back_populates="muscle")
    groupid = db.Column(db.Integer, db.ForeignKey("group_table.id"))
    muscle_group = db.relationship("Muscle_group", back_populates="muscles")
    free_routines = db.relationship(
        "Free_routine", back_populates="muscles_in_routine")

    def __repr__(self):
        return f'{self.muscle_name}'

    def serialize(self):
        return {
            "id": self.id,
            "muscles": self.muscle_name,

        }


class Free_routine(db.Model, SerializerMixin):
    __tablename__ = "freeroutine_table"
    id = db.Column(db.Integer, primary_key=True)
    routine_name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False)
    burnt_calories = db.Column(db.String(120), unique=False, nullable=False)
    routine_id = db.Column(db.Integer, db.ForeignKey("muscles_table.id"))
    muscles_in_routine = db.relationship(
        "Muscles", back_populates="free_routines")
    track_id = db.Column(db.Integer, db.ForeignKey("trackerfree_table.id"))
    track_free = db.relationship("Tracker_free", back_populates="routine")

    def __repr__(self):
        return f'{self.routine_name}'

    def serialize(self):
        return {
            "id": self.id,
            "routine_name": self.routine_name,
            "burnt_calories": self.burnt_calories,
        }


class Tracker_free(db.Model, SerializerMixin):
    __tablename__ = "trackerfree_table"
    id = db.Column(db.Integer, primary_key=True)
    burnt_cals = db.Column(db.Float, unique=False, nullable=False)
    total_distance = db.Column(db.Float, unique=False, nullable=False)
    daily_steps = db.Column(db.Float, unique=False, nullable=False)
    date = db.Column(db.Date, unique=False, nullable=False)
    routine = db.relationship("Free_routine", back_populates="track_free")
    freeuser_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    freeuser = db.relationship("User", back_populates="freetracker")

    def __repr__(self):
        return f'Rutina {self.date}'

    def serialize(self):
        return {
            "id": self.id,
            "burnt_cals": self.burnt_cals,
            "total_distance": self.total_distance,
            "daily_steps": self.daily_steps,
            "date": self.date,
        }


class Muscle_group(db.Model, SerializerMixin):
    __tablename__ = "group_table"
    id = db.Column(db.Integer, primary_key=True)
    muscle_group = db.Column(db.String(120), unique=True, nullable=False)
    muscles = db.relationship("Muscles", back_populates="muscle_group")
    routine_names = db.relationship(
        "Predetermined_routines", back_populates="muscles_in_da_group")

    def __repr__(self):
        return f'{self.muscle_group}'

    def serialize(self):
        return {
            "id": self.id,
            "muscle_group": self.muscle_group,
        }


class Predetermined_routines(db.Model, SerializerMixin):
    __tablename__ = "predeterminedroutines_table"
    id = db.Column(db.Integer, primary_key=True)
    routine_name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False)
    burnt_calories = db.Column(db.String(120), unique=False, nullable=False)
    routine_id = db.Column(db.Integer, db.ForeignKey("group_table.id"))
    muscles_in_da_group = db.relationship(
        "Muscle_group", back_populates="routine_names")
    track_id = db.Column(db.Integer, db.ForeignKey("trackerpred_table.id"))
    track_pred = db.relationship("Tracker_pred", back_populates="routine")

    def __repr__(self):
        return f'{self.routine_name}'

    def serialize(self):
        return {
            "id": self.id,
            "routine_name": self.routine_name,
            "burnt_calories": self.burnt_calories,
        }


class Tracker_pred(db.Model, SerializerMixin):
    __tablename__ = "trackerpred_table"
    id = db.Column(db.Integer, primary_key=True)
    burnt_cals = db.Column(db.Float, unique=False, nullable=False)
    total_distance = db.Column(db.Float, unique=False, nullable=False)
    daily_steps = db.Column(db.Float, unique=False, nullable=False)
    date = db.Column(db.Date, unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    user = db.relationship("User", back_populates="predtracker")
    routine = db.relationship("Predetermined_routines",
                              back_populates="track_pred")

    def __repr__(self):
        return f'Rutina {self.date}'

    def serialize(self):
        return {
            "id": self.id,
            "burnt_cals": self.burnt_cals,
            "total_distance": self.total_distance,
            "daily_steps": self.daily_steps,
            "date": self.date,
        }
