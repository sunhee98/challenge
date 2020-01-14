todo_list = {
    'todo': [
        {
            'id': 123,
            'values': '자바스크립트 공부하기'
        },
        {
            'id': 124,
            'values': 'IOS 공부하기'
        }
    ],
    'doing': [],
    'done': []
}


def make_unique_id():
    import random
    exist_ids = [v.get('id') for key, value in todo_list.items() for v in value]

    for i in range(len(exist_ids) + 1):
        r = random.randint(1, 1000)
        if r not in exist_ids:
            return r

def split_text(text):
    return {n: t for n, t in enumerate(text.split('$$'), start=1)}


def show_command(commands):
    second_command = commands.get(2)
    if second_command == 'current':
        return ''.join([f'{key}: {[v.get("id") for v in values]}, ' for key, values in todo_list.items()])

    elif second_command == 'todo':
        count = len(todo_list.get(second_command))
        values = ', '.join([f'"{item.get("values")}, {item.get("id")}"' for item in todo_list.get(second_command)])
        return f'총{count}건 : {values}'


def main():
    raw_command = input('명령하세요 : ')
    commands = split_text(text=raw_command)
    first_command = commands.get(1)

    if first_command == 'show':
        print(show_command(commands))