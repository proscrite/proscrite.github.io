"""
# Convert Keynote units (points) to percentage of canvas size
"""

# Transform each component position and size to percentage of canvas: 
# With the following format: { left: '6.15%', top: '2.78%', width: '19.27%', height: '44.26%' }, target: 'preparation' },
def to_percentage(component, canvas):
    x_perc =round(component['position'][0] / canvas['size'][0] * 100, 2)
    y_perc = round(component['position'][1] / canvas['size'][1] * 100, 2)
    w_perc = round(component['size'][0] / canvas['size'][0] * 100, 2)
    h_perc = round(component['size'][1] / canvas['size'][1] * 100, 2)
    return {'left': f'{x_perc}%', 'top': f'{y_perc}%', 'width': f'{w_perc}%', 'height': f'{h_perc}%'}



canvas = {'size': (68.65, 38.1)}

alphas = {'position': (5.11, 5.59), 'size': (15.05, 11.47)}
preparation = {'position': (4.86, 15.58), 'size': (10.47, 22.08)}
recoils = {'position': (26.26, 20.48), 'size': (24.9, 11.11)}
xrays = {'position': (26.26, 10.44), 'size': (24.9, 3.66)}
final = {'position': (51.16, 9.41), 'size': (14.77, 16.29)}

alpha_perc = to_percentage(alphas, canvas)
preparation_perc = to_percentage(preparation, canvas)
recoils_perc = to_percentage(recoils, canvas)
xrays_perc = to_percentage(xrays, canvas)
final_perc = to_percentage(final, canvas)
print(f"Alpha component (percentage): {alpha_perc}")
print(f"Preparation component (percentage): {preparation_perc}")
print(f"Recoil component (percentage): {recoils_perc}")
print(f"X-ray component (percentage): {xrays_perc}")
print(f"Final component (percentage): {final_perc}")