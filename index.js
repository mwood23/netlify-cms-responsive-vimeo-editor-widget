module.exports = {
  // Internal id of the component
  id: 'youtube',
  // Visible label
  label: 'YouTube',
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: 'id', label: 'YouTube Video ID', widget: 'string' }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return 'youtube ' + obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return `<div style="overflow: hidden;padding-bottom: 56.25%;position: relative;height: 0;"><iframe style="left: 0;top: 0;height: 100%;width: 100%;
    position: absolute;" width="853" height="505" src="https://www.youtube.com/embed/${
      obj.id
    }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }
};
