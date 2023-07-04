/* __vue_virtual_code_placeholder__ */

import TodoItem from "./TodoItem.vue";
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";

const todoStore = useTodoStore();
const newTodo = ref("");


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

let __VLS_name!: 'TodoList';
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
;
__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;
// @ts-ignore
[div,div,div,div,div,div,];
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
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
TodoItem: TodoItem,
todoStore: todoStore,
newTodo: newTodo,
handleAddTodo: handleAddTodo,
};
},
});
export default {} as typeof __VLS_publicComponent;

