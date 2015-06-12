class node:
    def __init__(self):
        self.type=""
        self.hash=""
        self.psource=""
        self.properties={}
        self.children=[]

    def add_child(self,child):
        self.children.append(child)

    def no_of_childs(self):
        return len(self.children)



class tree:

    def __init__(self):
        self.root=None

    def __init__(self,root):
        self.root=root
        

b=node()
c=node()
b.add_child(c)
print (b.children)
        
