module.exports = {
  // Internal id of the component
  id: 'vimeo',
  // Visible label
  label: 'Vimeo',
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: 'id', label: 'Vimeo Video ID', widget: 'string' }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^vimeo (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return `<div style="overflow: hidden;padding-bottom: 56.25%;position: relative;height: 0;"><iframe src="https://player.vimeo.com/video/${
      obj.id
    }" style="left: 0;top: 0;height: 100%;width: 100%;
      position: absolute;" width="853" height="505" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return `<div style="overflow: hidden;padding-bottom: 56.25%;position: relative;height: 0;"><iframe src="https://player.vimeo.com/video/${
      obj.id
    }" style="left: 0;top: 0;height: 100%;width: 100%;
      position: absolute;" width="853" height="505" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`;
  }
};
