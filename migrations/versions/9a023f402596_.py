"""empty message

Revision ID: 9a023f402596
Revises: 877bdf047c43
Create Date: 2022-11-15 18:22:55.008879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a023f402596'
down_revision = '877bdf047c43'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('profile_table', schema=None) as batch_op:
        batch_op.drop_constraint('profile_table_age_key', type_='unique')
        batch_op.drop_constraint('profile_table_bmi_key', type_='unique')
        batch_op.drop_constraint('profile_table_fat_percentage_key', type_='unique')
        batch_op.drop_constraint('profile_table_height_key', type_='unique')
        batch_op.drop_constraint('profile_table_weight_key', type_='unique')

    with op.batch_alter_table('trackerfree_table', schema=None) as batch_op:
        batch_op.drop_constraint('trackerfree_table_date_key', type_='unique')

    with op.batch_alter_table('user_table', schema=None) as batch_op:
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
        batch_op.alter_column('last_name',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_table', schema=None) as batch_op:
        batch_op.alter_column('last_name',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)
        batch_op.alter_column('email',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)

    with op.batch_alter_table('trackerfree_table', schema=None) as batch_op:
        batch_op.create_unique_constraint('trackerfree_table_date_key', ['date'])

    with op.batch_alter_table('profile_table', schema=None) as batch_op:
        batch_op.create_unique_constraint('profile_table_weight_key', ['weight'])
        batch_op.create_unique_constraint('profile_table_height_key', ['height'])
        batch_op.create_unique_constraint('profile_table_fat_percentage_key', ['fat_percentage'])
        batch_op.create_unique_constraint('profile_table_bmi_key', ['bmi'])
        batch_op.create_unique_constraint('profile_table_age_key', ['age'])

    # ### end Alembic commands ###
