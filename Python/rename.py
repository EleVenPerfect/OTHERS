import os

def file_rename():
    file_list = os.listdir(r"D:\test")
    print(file_list)
    print(os.getcwd())
    
    for file_name in file_list:
        os.rename(file_name,file_name.translate(None,"0123456789"))

file_rename()
