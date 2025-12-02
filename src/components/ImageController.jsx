import React, { useState, useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';

const ImageController = ({ isOpen, onClose, images, onUpdateImage }) => {
  const [activeImage, setActiveImage] = useState(images[0]?.id || null);
  const [copied, setCopied] = useState(false);
  const activeImageData = images.find(img => img.id === activeImage);

  const handleChange = (property, value) => {
    onUpdateImage(activeImage, property, value);
  };

  const generateCode = () => {
    const code = `const [images, setImages] = useState([
    { id: 'left', name: 'Izquierda', posX: ${images[0].posX}, posY: ${images[0].posY}, scale: ${images[0].scale}, opacity: ${images[0].opacity}, zIndex: ${images[0].zIndex} },
    { id: 'center', name: 'Centro', posX: ${images[1].posX}, posY: ${images[1].posY}, scale: ${images[1].scale}, opacity: ${images[1].opacity}, zIndex: ${images[1].zIndex} },
    { id: 'right', name: 'Derecha', posX: ${images[2].posX}, posY: ${images[2].posY}, scale: ${images[2].scale}, opacity: ${images[2].opacity}, zIndex: ${images[2].zIndex} },
  ]);`;
    return code;
  };

  const handleCopyCode = () => {
    const code = generateCode();
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-2xl p-6 w-80 max-h-96 overflow-y-auto border-2 border-orange-500">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-purple-950">Editor de Imágenes</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>

      {/* Image Selector */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Selecciona Imagen
        </label>
        <div className="grid grid-cols-3 gap-2">
          {images.map(img => (
            <button
              key={img.id}
              onClick={() => setActiveImage(img.id)}
              className={`p-2 rounded border-2 text-xs font-semibold transition-all ${
                activeImage === img.id
                  ? 'border-orange-500 bg-orange-100 text-orange-700'
                  : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-orange-300'
              }`}
            >
              {img.name}
            </button>
          ))}
        </div>
      </div>

      {activeImageData && (
        <div className="space-y-4">
          {/* Position X */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Posición Izquierda: {activeImageData.posX}px
            </label>
            <input
              type="range"
              min="-200"
              max="200"
              value={activeImageData.posX}
              onChange={(e) => handleChange('posX', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Position Y */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Posición Arriba: {activeImageData.posY}px
            </label>
            <input
              type="range"
              min="-100"
              max="100"
              value={activeImageData.posY}
              onChange={(e) => handleChange('posY', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tamaño: {activeImageData.scale}x
            </label>
            <input
              type="range"
              min="0.8"
              max="1.5"
              step="0.05"
              value={activeImageData.scale}
              onChange={(e) => handleChange('scale', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Opacity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Opacidad: {Math.round(activeImageData.opacity * 100)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={activeImageData.opacity}
              onChange={(e) => handleChange('opacity', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Z-Index */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Profundidad (Z-Index): {activeImageData.zIndex}
            </label>
            <input
              type="range"
              min="10"
              max="40"
              value={activeImageData.zIndex}
              onChange={(e) => handleChange('zIndex', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleCopyCode}
              className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Exportar Código
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="w-full bg-purple-950 text-white py-2 rounded font-semibold hover:bg-purple-900 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-500 mt-4 text-center">
        Presiona <kbd>Shift + E</kbd> para cerrar
      </p>
    </div>
  );
};

export default ImageController;
