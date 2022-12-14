"""empty message

Revision ID: 57ce073284c4
Revises: ca8edae19a66
Create Date: 2022-11-04 03:04:25.589666

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '57ce073284c4'
down_revision = 'ca8edae19a66'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('muscles_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('muscle_name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('muscle_name')
    )
    op.create_table('exercises_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('description', sa.String(length=80), nullable=False),
    sa.Column('muscle_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['muscle_id'], ['muscles_table.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.add_column('user_table', sa.Column('user_custom_name', sa.String(length=80), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user_table', 'user_custom_name')
    op.drop_table('exercises_table')
    op.drop_table('muscles_table')
    # ### end Alembic commands ###
