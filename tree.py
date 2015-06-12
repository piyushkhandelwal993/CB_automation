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

    def add_property(self,a,b):
        self.properties[a]=b
        

class tree:

    def __init__(self):
        self.root=None

    def __init__(self,root):
        self.root=root
        
def dfs_node_level(node):
    if(node==None): return 
    for i in node.children:
        print (i)
        dfs_node_level(i)
    

def dfs(t):
    if(t==None): return
    elif (t.root==None): return
    else dfs_node_level(t.root)
    
    
b=node()
