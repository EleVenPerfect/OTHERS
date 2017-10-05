class Item:
    def __init__(self,name):
        self.name = name

    def __repr__(self):
        return 'Item({!r})'.format(self.name)