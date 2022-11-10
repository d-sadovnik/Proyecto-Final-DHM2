"""empty message

Revision ID: 8cabc57ad5fc
Revises: 348a8fca123a
Create Date: 2022-11-04 03:58:46.819425

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8cabc57ad5fc'
down_revision = '348a8fca123a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('group_table_muscle_group_key', 'group_table', type_='unique')
    op.drop_constraint('group_table_routine_id_fkey', 'group_table', type_='foreignkey')
    op.drop_column('group_table', 'routine_id')
    op.drop_column('group_table', 'muscle_group')
    op.add_column('predeterminedroutines_table', sa.Column('routine_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'predeterminedroutines_table', 'group_table', ['routine_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'predeterminedroutines_table', type_='foreignkey')
    op.drop_column('predeterminedroutines_table', 'routine_id')
    op.add_column('group_table', sa.Column('muscle_group', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.add_column('group_table', sa.Column('routine_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('group_table_routine_id_fkey', 'group_table', 'predeterminedroutines_table', ['routine_id'], ['id'])
    op.create_unique_constraint('group_table_muscle_group_key', 'group_table', ['muscle_group'])
    # ### end Alembic commands ###
