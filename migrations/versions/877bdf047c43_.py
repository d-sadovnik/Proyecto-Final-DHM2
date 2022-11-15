"""empty message

Revision ID: 877bdf047c43
Revises: e4873dd106eb
Create Date: 2022-11-14 22:57:58.673562

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '877bdf047c43'
down_revision = 'e4873dd106eb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('exercises_table', schema=None) as batch_op:
        batch_op.drop_constraint('exercises_table_name_key', type_='unique')

    with op.batch_alter_table('freeroutine_table', schema=None) as batch_op:
        batch_op.drop_constraint('freeroutine_table_description_key', type_='unique')
        batch_op.drop_constraint('freeroutine_table_routine_name_key', type_='unique')

    with op.batch_alter_table('predeterminedroutines_table', schema=None) as batch_op:
        batch_op.drop_constraint('predeterminedroutines_table_description_key', type_='unique')
        batch_op.drop_constraint('predeterminedroutines_table_routine_name_key', type_='unique')

    with op.batch_alter_table('user_table', schema=None) as batch_op:
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)
        batch_op.alter_column('user_custom_name',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
        batch_op.alter_column('last_name',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
        batch_op.alter_column('is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_table', schema=None) as batch_op:
        batch_op.alter_column('is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)
        batch_op.alter_column('last_name',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
        batch_op.alter_column('user_custom_name',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)

    with op.batch_alter_table('predeterminedroutines_table', schema=None) as batch_op:
        batch_op.create_unique_constraint('predeterminedroutines_table_routine_name_key', ['routine_name'])
        batch_op.create_unique_constraint('predeterminedroutines_table_description_key', ['description'])

    with op.batch_alter_table('freeroutine_table', schema=None) as batch_op:
        batch_op.create_unique_constraint('freeroutine_table_routine_name_key', ['routine_name'])
        batch_op.create_unique_constraint('freeroutine_table_description_key', ['description'])

    with op.batch_alter_table('exercises_table', schema=None) as batch_op:
        batch_op.create_unique_constraint('exercises_table_name_key', ['name'])

    # ### end Alembic commands ###
