# Confetti

Confetti is the small object or streamers of colored objects that are scattered around the website.


## What's new in this module 

In most of the confetti modules, we are allowed to generate only some objects(circle, rectangle, triangle) in HTML canvas.But in this module, we can include any object by providing the SVG image of an object.Object Rotation, Size, and Opacity are possible in a random manner.

- No dependencies

## Options

##### rows
- How many objects need to displayed in a row.
     eg. row : 10 ,row : 20
##### columns 
- How many objects need to displayed in a column.
##### Opacity
- To set random Opacity for an object between 0 to 1 (default:"false") 

##### Size
- To set random size for an object (default:"false")

##### Rotation
- To set random rotation effect for an object (default:"false")

##### Icons
- Include the path of the svg image in an array

##### Color
- To set color hex value for an object

    

## Examples
```html
    <div class="confetti"></div>
    <div class="confetti"></div>

```

```javascript
    var confetti = {
    rows: 20,
    columns: 20,
    Opacity: true,
    Size: true,
    Rotation: true,
    Icons: [
      './confetti/Ellipse.svg',
      './confetti/Vector.svg',
      './confetti/Line.svg',
      './confetti/Polygon.svg',
      './confetti/Text.svg',
      './confetti/Star.svg'
    ],
    Color : ['#4DA1DA', '#FFFFFF', '#EB7265', '#EB7265', '#A4D77C']
  };
  generateConfetti('.confetti',confetti);
```

You can install it with :

```shell
    npm install generate-confetti --save
```

or

Clone the repo.Include this files.

```html
<script src="./js/app.js"></script>

```

