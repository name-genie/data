import json
import os
import glob

def handler_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        data = sorted(list(set(data)))
        size = len(data)

        with open(path, "w", encoding="utf-8") as file:
            # 排版
            buf = '['
            for i,d in enumerate(data):
                if i % 14 == 0:
                    buf += '\n  '
                buf += f'"{d}"'
                if i < size - 1:
                    buf += ', '
            buf.strip()
            buf += '\n]'
            file.write(buf)


def find_json_files(dir):
    json_files = []
    for file in os.listdir(dir):
        path = os.path.join(dir, file)
        if not os.path.isdir(path):
            if glob.fnmatch.fnmatch(file, "*.json"):
                json_files.append(path)
    return json_files


dirs = [
    "alchemy",
    "book",
    "clan",
    "creature",
    "dao",
    "material",
    "name",
    "nation",
    "place",
    "shared",
    "skill",
    "talisman",
]

for dir in dirs:
    json_files = find_json_files(dir)
    for f in json_files:
        handler_file(f)