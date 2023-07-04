/* __vue_virtual_code_placeholder__ */

import { TodoItem, useTodoStore } from "../stores/todo";

interface Props {
  id: number;
}
const props = defineProps<Props>();

const todoStore = useTodoStore();

const todoItem = todoStore.findTodo(props.id) as TodoItem;

function handleRemove() {
  todoStore.removeTodo(props.id);
}
const __VLS_publicComponent = (await import('vue')).defineComponent({
props: ({} as __VLS_TypePropsToRuntimeProps<Props>),
setup() {
return {
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'TodoItem';
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
& __VLS_WithComponent<'button', typeof __VLS_components, "Button", "button", "button">
;
__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_components.Div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;__VLS_templateComponents.div;
// @ts-ignore
[div,div,div,div,];
__VLS_components.H1;__VLS_components.H1;__VLS_templateComponents.h1;__VLS_templateComponents.h1;
// @ts-ignore
[h1,h1,];
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
( __VLS_ctx.todoItem.title );
}
{
const __VLS_8 = __VLS_templateComponents['div'];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({...{ }, }));
__VLS_templateComponents.div;
__VLS_templateComponents.div;
const __VLS_10 = __VLS_9({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = __VLS_templateComponents['button'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({...{ onClick: {} as any, }, }));
__VLS_templateComponents.button;
__VLS_templateComponents.button;
const __VLS_14 = __VLS_13({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
let __VLS_16 = { 'click': __VLS_pickEvent(__VLS_15.emit!, 'click' as const, __VLS_componentProps(__VLS_13, __VLS_14).onClick) };
__VLS_16 = {
click: (__VLS_ctx.handleRemove)};
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
// @ts-ignore
[todoItem,handleRemove,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
todoItem: todoItem,
handleRemove: handleRemove,
};
},
});
export default {} as typeof __VLS_publicComponent;

type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? { type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>> } : { type: import('vue').PropType<T[K]>, required: true } };
