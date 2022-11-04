from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, Table, Float
from sqlalchemy.orm import declarative_base, relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user_table"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_custom_name = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    profile = db.relationship("Profile", back_populates="name", uselist=False)

    def __repr__(self):
        return f'{self.user_custom_name}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
        }


class Profile(db.Model):
    __tablename__ = "profile_table"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    age = db.Column(db.Integer, unique=True, nullable=False)
    height = db.Column(db.Float, unique=True, nullable=False)
    weight = db.Column(db.Float, unique=True, nullable=False)
    bmi = db.Column(db.Float, unique=True, nullable=False)
    fat_percentage = db.Column(db.Float, unique=True, nullable=False)
    name = db.relationship("User", back_populates="profile")

    def __repr__(self):
        return f'{self.name}'

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


class Exercises(db.Model):
    __tablename__="exercises_table"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    burnt_calories = db-Column(db.Float, unique=False, nullable=False)
    muscle_id = db.Column(db.Integer, db.ForeignKey("muscles_table.id"))
    muscle = db.relationship("Muscles", back_populates="excercise")

    def __repr__(self):
        return f'{self.name}'
    
    def serialize(self):
        return { 
            "id":self.id,
            "name":self.name,
            "description":self.description,
            "burnt_calories":self.burnt_calories,            
        }

class Muscles(db.Model):
    __tablename__="muscles_table"
    id = db.Column(db.Integer, primary_key=True)
    muscle_name = db.Column(db.String(120), unique=True, nullable=False)
    excercise = db.relationship("Exercises", back_populates="muscle")
    groupid=db.Column(db.Integer, db.ForeignKey("group_table.id"))
    muscle_group=db.relationship("Muscle_group",back_populates="muscles")

    def __repr__(self):
        return f'{self.muscle_name}'
    
    def serialize(self):
        return {
            "id":self.id,
            "muscles":self.muscles,
        }

class Muscle_group(db.Model):
    __tablename__="group_table"
    id = db.Column(db.Integer, primary_key=True)
    muscle_group = db.Column(db.String(120), unique=True, nullable=False)
    muscles = db.relationship("Muscles", back_populates="muscle_group")

    def __repr__(self):
        return f'{self.muscle_group}'

    def serialize(self):
        return { 
            "id":self.id,
            "muscle_group":self.muscle_group
        }