declare namespace HtmlTagsCategorized {
    interface HtmlTags {
        BasicStructure: readonly string[];
        DocumentSections: readonly string[];
        TextAndFormatting: readonly string[];
        ListsAndTables: readonly string[];
        FormsAndInput: readonly string[];
        Multimedia: readonly string[];
        Miscellaneous: readonly string[];
        InteractiveElements: readonly string[];
        MathAndSemanticElements: readonly string[];
    }

    export const htmlTags: HtmlTags;
}
  
export = HtmlTagsCategorized;
  