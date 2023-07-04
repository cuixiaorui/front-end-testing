/* __vue_virtual_code_placeholder__ */

import TodoItem from "./TodoItem.vue";
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";
import { calculateCount } from "./todo";

const todoStore = useTodoStore();
const newTodo = ref("");

const count = ref(0);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function handleCalculateCount() {

  count.value = calculateCount(array)

  // // 初始计数为0

  // // 使用map函数对数组的每个元素进行处理
  // array.map((item, index: number) => {
  //   // 如果元素是偶数，那么就增加到count
  //   if (item % 2 === 0) {
  //     count.value += item;
  //   }

  //   // 如果元素是3的倍数，那么就从count中减去它
  //   if (item % 3 === 0) {
  //     count.value -= item;
  //   }

  //   // 如果元素是5的倍数，那么就将count乘以该元素
  //   if (item % 5 === 0) {
  //     count.value *= item;
  //   }

  //   // 如果元素的索引是质数，那么就增加索引到count
  //   if (isPrime(index)) {
  //     count.value += index;
  //   }
  // });

  // // 判断一个数字是否是质数
  // function isPrime(num: number) {
  //   if (num <= 1) return false;
  //   for (let i = 2; i < num; i++) {
  //     if (num % i === 0) return false;
  //   }
  //   return true;
  // }
}

function handleAddTodo() {
  todoStore.addTodo(newTodo.value);
  newTodo.value = "";
}
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'TodoListNew';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & __VLS_GlobalComponents;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {}
& __VLS_WithComponent<'div', typeof __VLS_components, "Div", "div", "div">
& __VLS_WithComponent<'h1', typeof __VLS_components, "H1", "h1", "h1">
& __VLS_WithComponent<'input', typeof __VLS_components, "Input", "input", "input">
& __VLS_WithComponent<'ul', typeof __VLS_components, "Ul", "ul", "ul">
& __VLS_WithComponent<'li', typeof __VLS_components, "Li", "li", "li">
& __VLS_WithComponent<'TodoItem', typeof __VLS_components, "TodoItem", "TodoItem", "TodoItem">
& __VLS_WithComponent<'button', typeof __VLS_components, "Button", "button", "button">
;
__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;
// @ts-ignore
[div,div,div,div,div,div,div,div,div,div,];
__VLS_components.H1;__VLS_components.H1;__VLS_templateComponents.h1;__VLS_templateComponents.h1;
// @ts-ignore
[h1,h1,];
__VLS_components.Input;__VLS_templateComponents.input;
// @ts-ignore
[input,];
__VLS_components.Ul;__VLS_components.Ul;__VLS_templateComponents.ul;__VLS_templateComponents.ul;
// @ts-ignore
[ul,ul,];
__VLS_components.Li;__VLS_components.Li;__VLS_templateComponents.li;__VLS_templateComponents.li;
// @ts-ignore
[li,li,];
__VLS_templateComponents.TodoItem;__VLS_templateComponents.TodoItem;
// @ts-ignore
[TodoItem,TodoItem,];
__VLS_components.Button;__VLS_components.Button;__VLS_templateComponents.button;__VLS_templateComponents.button;
// @ts-ignore
[button,button,];
{
const __VLS_0 = __VLS_templateComponents['div'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({...{ }, }));
__VLS_templateComponents.div;
__VLS_templateComponents.div;
const __VLS_2 = __VLS_1({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = __VLS_templateComponents['h1'];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({...{ }, }));
__VLS_templateComponents.h1;
__VLS_templateComponents.h1;
const __VLS_6 = __VLS_5({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
}
{
const __VLS_8 = __VLS_templateComponents['div'];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({...{ }, }));
__VLS_templateComponents.div;
__VLS_templateComponents.div;
const __VLS_10 = __VLS_9({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = __VLS_templateComponents['input'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({...{ onKeypress: {} as any, }, }));
__VLS_templateComponents.input;
const __VLS_14 = __VLS_13({ ...{ onKeypress: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
(__VLS_ctx.newTodo);
let __VLS_16 = { 'keypress': __VLS_pickEvent(__VLS_15.emit!, 'keypress' as const, __VLS_componentProps(__VLS_13, __VLS_14).onKeypress) };
__VLS_16 = {
keypress: (__VLS_ctx.handleAddTodo)};
}
}
{
const __VLS_17 = __VLS_templateComponents['div'];
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({...{ }, }));
__VLS_templateComponents.div;
__VLS_templateComponents.div;
const __VLS_19 = __VLS_18({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19)!;
{
const __VLS_21 = __VLS_templateComponents['ul'];
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({...{ }, }));
__VLS_templateComponents.ul;
__VLS_templateComponents.ul;
const __VLS_23 = __VLS_22({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
for (const [todoItem] of __VLS_getVForSourceType((__VLS_ctx.todoStore.todos)!)) {
{
const __VLS_25 = __VLS_templateComponents['li'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({...{ }, key: ((todoItem.id)), }));
__VLS_templateComponents.li;
__VLS_templateComponents.li;
const __VLS_27 = __VLS_26({ ...{ }, key: ((todoItem.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
{
const __VLS_29 = __VLS_templateComponents['TodoItem'];
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({...{ }, id: ((todoItem.id)), }));
__VLS_templateComponents.TodoItem;
__VLS_templateComponents.TodoItem;
const __VLS_31 = __VLS_30({ ...{ }, id: ((todoItem.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
}
}
// @ts-ignore
[newTodo,handleAddTodo,todoStore,];
}
}
}
{
const __VLS_33 = __VLS_templateComponents['div'];
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({...{ }, }));
__VLS_templateComponents.div;
__VLS_templateComponents.div;
const __VLS_35 = __VLS_34({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
{
const __VLS_37 = __VLS_templateComponents['button'];
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({...{ onClick: {} as any, }, }));
__VLS_templateComponents.button;
__VLS_templateComponents.button;
const __VLS_39 = __VLS_38({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
let __VLS_41 = { 'click': __VLS_pickEvent(__VLS_40.emit!, 'click' as const, __VLS_componentProps(__VLS_38, __VLS_39).onClick) };
__VLS_41 = {
click: (__VLS_ctx.handleCalculateCount)};
}
{
const __VLS_42 = __VLS_templateComponents['div'];
const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({...{ }, }));
__VLS_templateComponents.div;
__VLS_templateComponents.div;
const __VLS_44 = __VLS_43({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44)!;
( __VLS_ctx.count );
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
// @ts-ignore
[handleCalculateCount,count,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
TodoItem: TodoItem,
todoStore: todoStore,
newTodo: newTodo,
count: count,
handleCalculateCount: handleCalculateCount,
handleAddTodo: handleAddTodo,
};
},
});
export default {} as typeof __VLS_publicComponent;

