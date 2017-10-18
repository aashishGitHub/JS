window.test = {};

window.test.ns = function (namespaceValue) {
    /// <summary> Creates and returns a namespace object. 
    ///  If the callback argument is not null, it will be invoked with the namespace object.
    /// </summary>
    /// <param name="namespaceValue">Namespace object path within the window object</param>
    /// <param name="callback">A function to call back with the namespace object</param>
    /// <returns type="object">Returns the namespace object</returns>
    if (namespaceValue) {
        // split namespace path to parts
        var parts = namespaceValue.split('.'),
            // sub object name
            subName,
            // current parent (starting with [window])
            parent = window;

        // check if each sub object exists. If not, create it
        while (parts.length > 0) {
            // take first sub object name (and remove it from [parts])
            subName = parts.shift();
            // create it within the parent if needed
            if (!parent[subName]) {
                parent[subName] = {};
            }
            // make the sub object the parent for next iterations
            parent = parent[subName];
        }
        
        return parent;
    }
    return null;
};