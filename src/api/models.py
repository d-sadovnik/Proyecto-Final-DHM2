from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, Table, Float
from sqlalchemy.orm import declarative_base, relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user_table"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=True, nullable=False)
    profile = db.relationship("Profile", back_populates="name", uselist=False)

    def __repr__(self):
        return f'<User {self.email}>'

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
        return f'<Profile {self.id}>'

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

