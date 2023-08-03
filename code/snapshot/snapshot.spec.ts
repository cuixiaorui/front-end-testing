import { it, expect, describe } from 'vitest'
import Hi from './Hi.vue';
import {mount} from '@vue/test-utils';




it('snapshot', () => {
	// form rules
	const wrapper = mount(Hi)
	expect(wrapper.html()).toMatchSnapshot()
	// expect({name:"cxr", age: 10}).toMatchSnapshot()
});


it('inline', () => {
	
	expect({name:"cxr", age: 10}).toMatchInlineSnapshot(`
		{
		  "age": 10,
		  "name": "cxr",
		}
	`)
	
});


it('file', () => {
	const wrapper = mount(Hi)
	expect(wrapper.html()).toMatchFileSnapshot("./hi.html")
	
});

