"""empty message

Revision ID: c1d95cf2b31b
Revises: 1515ecd33ef9
Create Date: 2022-11-04 05:19:14.502800

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c1d95cf2b31b'
down_revision = '1515ecd33ef9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('freeroutine_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('routine_name', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=True),
    sa.Column('burnt_calories', sa.String(length=120), nullable=False),
    sa.Column('routine_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['routine_id'], ['muscles_table.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('routine_name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('freeroutine_table')
    # ### end Alembic commands ###