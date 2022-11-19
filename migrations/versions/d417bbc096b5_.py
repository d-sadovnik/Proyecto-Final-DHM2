"""empty message

Revision ID: d417bbc096b5
Revises: 9a023f402596
Create Date: 2022-11-15 22:43:33.868930

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd417bbc096b5'
down_revision = '9a023f402596'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_table', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
        batch_op.alter_column('last_name',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_table', schema=None) as batch_op:
        batch_op.alter_column('last_name',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)

    # ### end Alembic commands ###