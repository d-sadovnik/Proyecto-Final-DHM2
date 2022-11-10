"""empty message

Revision ID: 72684f6a46fe
Revises: a610f6c766e3
Create Date: 2022-11-04 03:48:16.075277

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '72684f6a46fe'
down_revision = 'a610f6c766e3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('predeterminedroutines_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('routine_name', sa.String(length=120), nullable=False),
    sa.Column('burnt_calories', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('routine_name')
    )
    op.add_column('group_table', sa.Column('routine_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'group_table', 'predeterminedroutines_table', ['routine_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'group_table', type_='foreignkey')
    op.drop_column('group_table', 'routine_id')
    op.drop_table('predeterminedroutines_table')
    # ### end Alembic commands ###