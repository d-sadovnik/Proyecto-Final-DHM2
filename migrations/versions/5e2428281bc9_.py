"""empty message

Revision ID: 5e2428281bc9
Revises: 57ce073284c4
Create Date: 2022-11-04 03:11:43.479630

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e2428281bc9'
down_revision = '57ce073284c4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('exercises_table', 'description',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=120),
               existing_nullable=False)
    op.alter_column('muscles_table', 'muscle_name',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=120),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('muscles_table', 'muscle_name',
               existing_type=sa.String(length=120),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    op.alter_column('exercises_table', 'description',
               existing_type=sa.String(length=120),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    # ### end Alembic commands ###
