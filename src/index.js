/**
 * Build styles
 */
require('./index.css').toString();

/**
 * Base Paragraph Block for the Editor.js.
 * Represents simple paragraph
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */

/**
 * @typedef {object} ParagraphConfig
 * @property {string} placeholder - placeholder for the empty paragraph
 * @property {boolean} preserveBlank - Whether or not to keep blank paragraphs when saving editor data
 */

/**
 * @typedef {Object} ParagraphData
 * @description Tool's input and output data format
 * @property {String} text — Paragraph's content. Can include HTML tags: <a><b><i>
 */
class Paragraph {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @return {string}
   * @constructor
   */
  static get DEFAULT_PLACEHOLDER() {
    return '';
  }

  /**
   * Allowed alignments
   *
   * @public
   * @returns {{left: string, center: string}}
   */
  static get ALIGNMENTS() {
    return {
      left: 'align-left',
      center: 'align-center',
      right: 'align-right'
    };
  }

  /**
   * Default paragraph alignment
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGNMENT() {
    return Paragraph.ALIGNMENTS.left;
  }

  /**
   * Tool`s settings properties
   *
   * @returns {*[]}
   */
  get settings() {
    return [
      {
        name: 'align-left',
        icon: `<svg class="icon" width="15" height="15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960.007451 0H64.00158C28.652059 0 0 28.653866 0 64.003387s28.652059 64.00158 64.00158 64.00158h896.005871c35.338684 0 63.992549-28.652059 63.992549-64.00158C1024 28.653866 995.346134 0 960.007451 0zM704.001129 896.007676H64.00158C28.652059 896.007676 0 924.659736 0 960.009257c0 35.338684 28.652059 63.990743 64.00158 63.990743h639.999549c35.347715 0 64.00158-28.652059 64.00158-63.990743 0-35.349521-28.653866-64.00158-64.00158-64.001581zM704.001129 296.962348H64.00158C28.652059 296.962348 0 325.614407 0 360.963929c0 35.349521 28.652059 64.00158 64.00158 64.00158h639.999549c35.347715 0 64.00158-28.652059 64.00158-64.00158 0-35.349521-28.653866-64.00158-64.00158-64.001581zM960.007451 599.045328H64.00158C28.652059 599.045328 0 627.699194 0 663.046909c0 35.338684 28.652059 63.990743 64.00158 63.990743h896.005871c35.338684 0 63.992549-28.652059 63.992549-63.990743 0-35.347715-28.653866-64.00158-63.992549-64.001581z"  /></svg>`
      },
      {
        name: 'align-center',
        icon: `<svg class="icon" width="15" height="15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M832.00429 896.007676h-639.997742c-35.349521 0-64.00158 28.652059-64.001581 64.001581 0 35.338684 28.652059 63.990743 64.001581 63.990743h639.997742c35.349521 0 64.00158-28.652059 64.00158-63.990743 0-35.349521-28.652059-64.00158-64.00158-64.001581zM960.009257 599.045328H64.00158C28.652059 599.045328 0 627.699194 0 663.046909c0 35.338684 28.652059 63.990743 64.00158 63.990743h896.007677c35.336878 0 63.990743-28.652059 63.990743-63.990743 0-35.347715-28.653866-64.00158-63.990743-64.001581zM960.009257 0H64.00158C28.652059 0 0 28.653866 0 64.003387s28.652059 64.00158 64.00158 64.00158h896.007677c35.336878 0 63.990743-28.652059 63.990743-64.00158C1024 28.653866 995.346134 0 960.009257 0zM832.00429 296.962348h-639.997742c-35.349521 0-64.00158 28.653866-64.001581 64.001581 0 35.349521 28.652059 64.00158 64.001581 64.00158h639.997742c35.349521 0 64.00158-28.652059 64.00158-64.00158 0-35.349521-28.652059-64.00158-64.00158-64.001581z"  /></svg>`
      },
      {
        name: 'align-right',
        icon: `<svg class="icon" width="15" height="15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960.007451 0H64.00158C28.652059 0 0 28.653866 0 64.003387s28.652059 64.00158 64.00158 64.00158h896.005871c35.338684 0 63.992549-28.652059 63.992549-64.00158C1024 28.653866 995.346134 0 960.007451 0zM960.007451 896.007676H319.998871c-35.338684 0-63.990743 28.652059-63.990743 64.001581 0 35.338684 28.652059 63.990743 63.990743 63.990743h640.00858c35.338684 0 63.992549-28.652059 63.992549-63.990743 0-35.349521-28.653866-64.00158-63.992549-64.001581zM960.007451 296.962348H319.998871c-35.338684 0-63.990743 28.653866-63.990743 64.001581 0 35.349521 28.652059 64.00158 63.990743 64.00158h640.00858c35.338684 0 63.992549-28.652059 63.992549-64.00158 0-35.349521-28.653866-64.00158-63.992549-64.001581zM960.007451 599.045328H64.00158C28.652059 599.045328 0 627.699194 0 663.046909c0 35.338684 28.652059 63.990743 64.00158 63.990743h896.005871c35.338684 0 63.992549-28.652059 63.992549-63.990743 0-35.347715-28.653866-64.00158-63.992549-64.001581z"  /></svg>`
      }
    ];
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   */
  constructor({data, config, api}) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-paragraph',
      settingsWrapper: 'cdx-paragraph-settings',
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive
    };
    this.onKeyUp = this.onKeyUp.bind(this);

    /**
     * Placeholder for paragraph if it is first Block
     * @type {string}
     */
    this._placeholder = config.placeholder ? config.placeholder : Paragraph.DEFAULT_PLACEHOLDER;
    this._data = {};
    this._element = this.drawView();
    this._preserveBlank = config.preserveBlank !== undefined ? config.preserveBlank : false;

    this.data = {
      text: data.text || '',
      alignment: Object.values(Paragraph.ALIGNMENTS).includes(data.alignment) && data.alignment ||
        config.defaultAlignment ||
        Paragraph.DEFAULT_ALIGNMENT
    };

    this._acceptTuneView(); // set default alignment in view
  }

  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== 'Backspace' && e.code !== 'Delete') {
      return;
    }

    const {textContent} = this._element;

    if (textContent === '') {
      this._element.innerHTML = '';
    }
  }

  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */
  drawView() {
    let div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.contentEditable = true;
    div.dataset.placeholder = this.api.i18n.t(this._placeholder);

    div.addEventListener('keyup', this.onKeyUp);

    return div;
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }


  capitalize(str = '') {
    return str.split(/-|_/).map(function(x, i) {
      if (i === 0) {
        return x
      } else {
        return x[0].toUpperCase() + x.substr(1)
      }
    }).join('')
  }

  /**
   * Create Block's settings block
   *
   * @return {HTMLElement}
   */
  renderSettings() {
    const wrapper = this._make('div', [this._CSS.settingsWrapper], {});

    this.settings
      .map(tune => {
        const el = this._make('div', this._CSS.settingsButton, {
          innerHTML: tune.icon,
          title: tune.name
        });

        el.classList.toggle(this._CSS.settingsButtonActive, tune.name === this.data.alignment);

        this.api.tooltip.onHover(
          el,
          this.api.i18n.t(
            this.capitalize(tune.name)
          )
        )

        wrapper.appendChild(el);

        return el;
      })
      .forEach((element, index, elements) => {
        element.addEventListener('click', () => {
          this._toggleTune(this.settings[index].name);

          elements.forEach((el, i) => {
            const { name } = this.settings[i];

            el.classList.toggle(this._CSS.settingsButtonActive, name === this.data.alignment);
          });
        });
      });

    return wrapper;
  };

  /**
   * Toggle paragraph`s alignment
   *
   * @param {string} tune - alignment
   * @private
   */
  _toggleTune(tune) {
    this.data.alignment = tune;
    this._acceptTuneView();
  }

  /**
   * Add specified class corresponds with activated tunes
   * @private
   */
  _acceptTuneView() {
    const self = this

    this.settings.forEach(function(tune) {
      self._element.classList.toggle(tune.name, self.data.alignment == tune.name)
    })
  }

  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   * @param {ParagraphData} data
   * @public
   */
  merge(data) {
    let newData = {
      text : this.data.text + data.text,
      alignment: data.alignment
    };

    this.data = newData;
  }

  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(savedData) {
    if (savedData.text.trim() === '' && !this._preserveBlank) {
      return false;
    }

    return true;
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(toolsContent) {
    return {
      text: toolsContent.innerHTML,
      alignment: this.data.alignment
    };
  }

  /**
   * On paste callback fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(event) {
    const data = {
      text: event.detail.data.innerHTML
    };

    this.data = data;
  }

  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   */
  static get conversionConfig() {
    return {
      export: 'text', // to convert Paragraph to other block, use 'text' property of saved data
      import: 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: true,
      }
    };
  }

  /**
   * Get current Tools`s data
   * @returns {ParagraphData} Current data
   * @private
   */
  get data() {
    let text = this._element.innerHTML;

    this._data.text = text;

    return this._data;
  }

  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {ParagraphData} data — data to set
   * @private
   */
  set data(data) {
    this._data = data || {};

    this._element.innerHTML = this._data.text || '';
  }

  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {{tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: [ 'P' ]
    };
  }

  /**
   * Icon and title for displaying at the Toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: require('./toolbox-icon.svg').default,
      title: 'Text'
    };
  }

  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @return {Element}
   */
  _make(tagName, classNames = null, attributes = {}) {
    let el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (let attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}

module.exports = Paragraph;
