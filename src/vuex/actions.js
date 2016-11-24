//定义通配函数
function makeAction(type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args);
};

// 更新当前TOKEN对象
export const updateActiveToken = makeAction('UPDATE_ACTIVE_TOKEN');

//获取当前Token对象
export const queryActiveToken = makeAction('QUERY_ACTIIVE_TOKEN');

