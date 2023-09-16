import test from 'ava';
import voidHtmlTags from './void';
import htmlTagsCategorized from './html-categorized';
import htmlTags from '.';

test('`html-tags` is an array of HTML tags', t => {
	t.true(Array.isArray(htmlTags));
	t.true(htmlTags.length > 10 && htmlTags.length < 1000);
});

test('`html-tags/void` is an array of void HTML tags', t => {
	t.true(Array.isArray(voidHtmlTags));
	t.true(voidHtmlTags.length > 10 && voidHtmlTags.length < 1000);
});
test('HTML Tags Categorized - Category Existence', t => {
	// Define an array of expected category names
	const expectedCategories = [
	  'BasicStructure',
	  'DocumentSections',
	  'TextAndFormatting',
	  'ListsAndTables',
	  'FormsAndInput',
	  'Multimedia',
	  'Miscellaneous',
	  'InteractiveElements',
	  'MathAndSemanticElements'
	];

	// Check if each expected category exists in the module
	expectedCategories.forEach(category => {
	  t.true(category in htmlTagsCategorized.htmlTags, `Category ${category} exists`);
	});
});

test('HTML Tags Categorized - Category Content', t => {
	// Check if each category contains an array of HTML tags
	for (const category in htmlTagsCategorized.htmlTags) {
	  const tags = htmlTagsCategorized.htmlTags[category];
	  t.true(Array.isArray(tags) && tags.length > 0, `Category ${category} has content`);
	}
});

test('HTML Tags Categorized - Tag Existence in Categories', t => {
	// Define an object where keys are category names and values are arrays of expected tags
	const expectedTags = {
	  BasicStructure: ['html', 'head', 'meta', 'title', 'link'],
	  DocumentSections: ['body', 'header', 'main', 'nav', 'footer'],
	  TextAndFormatting: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em', 'abbr', 'cite', 'code', 'var', 'pre', 'blockquote', 'q', 'mark', 'del', 'ins', 's'],
	  ListsAndTables: ['ul', 'ol', 'li', 'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'colgroup', 'col'],
	  FormsAndInput: ['form', 'input', 'textarea', 'button', 'label', 'select', 'option', 'optgroup', 'fieldset', 'legend'],
	  Multimedia: ['img', 'audio', 'video', 'source', 'track', 'iframe'],
	  Miscellaneous: ['div', 'span', 'hr', 'br', 'wbr', 'slot', 'template'],
	  InteractiveElements: ['a', 'button', 'details', 'summary', 'menu', 'menuitem'],
	  MathAndSemanticElements: ['math', 'ruby', 'rt', 'rp', 'rtc']
	};

	// Iterate through categories and expected tags, then check if each tag exists in the respective category
	for (const category in expectedTags) {
	  const tags = expectedTags[category];
	  tags.forEach(tag => {
			t.true(htmlTagsCategorized.htmlTags[category].includes(tag), `Tag ${tag} exists in category ${category}`);
	  });
	}
});
