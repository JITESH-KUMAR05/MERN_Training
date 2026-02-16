# Responsive Web Design

## Essential CSS concepts
1. Display property
2. Box model
3. Box-sizing
4. Positioning


      top
      bottom
      left
      right



5. Responvice layouts
6. Media queries
7. Flexbox
8. CSS Grid


* width and height can only be applied to block-level elements, not inline elements. To make an inline element accept width and height, you can change its display property to `inline-block` or `block`.

* every element of html is a box, and the box model consists of four parts: content, padding, border, and margin. The total width and height of an element can be calculated as follows:
  - Total width = width + padding-left + padding-right + border-left + border-right 
  - Total height = height + padding-top + padding-bottom + border-top + border-bottom 


## CSS Positioning
1. Static: The default position for all elements. Elements are positioned according to the normal flow of the document.
2. Relative: The element is positioned relative to its normal position. You can use the `top`, `right`, `bottom`, and `left` properties to adjust its position.
3. Absolute: The element is positioned relative to its nearest positioned ancestor (an ancestor with a position other than static). If there is no such ancestor, it is positioned relative to the initial containing block (usually the viewport).
4. Fixed: The element is positioned relative to the viewport, which means it stays in the same place even when the page is scrolled.
5. Sticky: The element is positioned based on the user's scroll position. It toggles between relative and fixed, depending on the scroll position. It is treated as relative until it crosses a specified threshold, at which point it becomes fixed.


## Note 
* relative --> relative to its current position
* absolute --> relative to its nearest positioned ancestor


# Media Queries
Media queries are a powerful tool in CSS that allow you to apply different styles based on the characteristics of the device or viewport. They are commonly used in responsive web design to create layouts that adapt to different screen sizes and orientations.
The basic syntax of a media query is as follows:

```css
@media media-type operator (media-feature) {
  /* CSS rules to apply when the condition is true */
}
```