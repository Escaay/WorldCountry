import { createMapperHooksStore } from '@extremelyjs/store';

const myInfoStore = createMapperHooksStore<any>({
  // isLogin: false,
  // mock
  isLogin: true,
  // mock
  id: '5923597030531',
  phone: '13288923210',
  name: '地球人',
  avatarURL:
    'https://p6-passport.byteacctimg.com/img/mosaic-legacy/3795/3044413937~80x80.jpg',
  gender: '男',
  age: '999',
  vx: 'escaay',
  originalAddress: ['广东省', '深圳市', '大鹏新区'],
  currentAddress: ['广东省', '深圳市', '大鹏新区'],
  status: ['上学'],
  customTags: [
    '前端开发工程师',
    '王者荣耀',
    '大学生',
    '乒乓球',
    'qq飞车',
    '象棋',
    '游泳',
    '创造与魔法',
    '旅游',
    '象棋',
    '游泳',
    '创造与魔法',
    '旅游',
    '象棋',
    '游泳',
    '创造与魔法',
    '旅游',
    '象棋',
    '游泳',
    '创造与魔法',
    '旅游',
  ],
  message: [
    {
      id: '1351751741124',
      name: '张三',
      text: '你好，我是张三，可以认识一下吗',
    },
  ],
});

export const useMyInfo = myInfoStore.useStoreValue; // 监听state变化

export const setMyInfo = myInfoStore.setStoreValue; // 修改state，支持value或者callback

export const resetMyInfo = myInfoStore.reset; // 重置state
