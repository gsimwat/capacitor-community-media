var capacitorMedia = (function (exports, core) {
    'use strict';

    const Media = core.registerPlugin('Media', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.MediaWeb()),
    });

    class MediaWeb extends core.WebPlugin {
        getMedias(options) {
            console.log('getMedias', options);
            throw this.unimplemented('Not implemented on web.');
        }
        getMediaByIdentifier(options) {
            console.log('getMediaByIdentifier', options);
            throw this.unimplemented('Not implemented on web.');
        }
        getAlbums() {
            throw this.unimplemented('Not implemented on web.');
        }
        savePhoto(options) {
            console.log('savePhoto', options);
            throw this.unimplemented('Not implemented on web.');
        }
        saveVideo(options) {
            console.log('saveVideo', options);
            throw this.unimplemented('Not implemented on web.');
        }
        createAlbum(options) {
            console.log('createAlbum', options);
            throw this.unimplemented('Not implemented on web.');
        }
        getAlbumsPath() {
            console.log('getAlbumsPath');
            throw this.unimplemented('Not implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MediaWeb: MediaWeb
    });

    exports.Media = Media;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
