todo_list = [
    {
        'id': 123,
        'values': ['lorem', 'xdof']
    },
    {
        'id': 124,
        'values': ['snffox', 'lorem']
    }
]


def input_text():
    text = input('명령하세요 : ')
    command = text.split('&&')[0]
    return command, text



def show_command(text):
    if text == 'current':
        pass
    elif text == 'todo':
        pass
    else:
        raise KeyError(f'{text} is not in command please check command')

def main():
    command, text = input_text()
    if command == 'show':
        pass
    elif command == 'add':
        pass
    elif command == 'delete':
        pass
    else:
        raise KeyError(f'{text} is not in command please check command')

