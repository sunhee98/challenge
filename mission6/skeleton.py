# /*
#  1. function show: task상태를 보여주는 함수
#     1. show - current: 현재(task 상태)를 보여줌
#         1. current - todo: 해야될 일
#         2. current - doing: 하고있는 일
#         3. current - done: 한 일

#     2. show - todo: show - current - todo와 동일

# 2. function add: 해야될 일을 추가하는 함수
#     1. add - command - value: command를 할 일에 추가, 유니크한 id 추가, value 추가

# 3. function update: 현재 상태를 업데이트 
#     1. update - id - status: id값에 해당되는 status를 업데이트

# 4. function delete: task를 삭제한다
#     1. delete - id: id에 해당되는 task 삭제

# */

# // 명령하세요 : show$$current
# // 현재상태 :  todo:[123,124], doing:[123,444], done:[]

# // 명령하세요 : show$$todo
# // todo리스트 :  총2건 : ' 자바스크립트 공부하기, 123번','iOS공부하기, 124번'

# // 명령하세요 : add$$docker공부하기$$["favorite","programming"]
# // docker공부하기가 추가됐습니다.(id : 7788)
# // 현재상태 :  todo:[123,124,7788], doing:[123,444], done:[]

# // 명령하세요 : update$$7788$$doing
# // docker공부하기 doing으로 상태가 변경됐습니다
# // 현재상태 :  todo:[123,124], doing:[123,444, 7788], done:[]

# // 명령하세요 : delete$$7788
# // docker공부하기가 doing목록에서 삭제됐습니다
# // 현재상태 :  todo:[123,124], doing:[123,444], done:[]
