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




# alphas = {'position': (5.11, 5.59), 'size': (15.05, 11.47)}
# preparation = {'position': (4.86, 15.58), 'size': (10.47, 22.08)}
# recoils = {'position': (26.26, 20.48), 'size': (24.9, 11.11)}
# xrays = {'position': (26.26, 10.44), 'size': (24.9, 3.66)}
# final = {'position': (51.16, 9.41), 'size': (14.77, 16.29)}

canvas = {'size': (102.37, 94.54)}
dict_list = [{'take_spectra': {'size': (24.29, 5.48), 'position': (12.3, 41.15)} },
{'take_trajectories': {'size': (24.29, 5.48), 'position': (38.5, 41.15)} },
{'power_ramp': {'size': (24.39, 5.48), 'position': (64.6, 41.15)} },

{'autofocus': {'size': (24.39, 5.48), 'position': (64.6, 48.45)} },
{'live_camera': {'size': (24.24, 5.72), 'position': (38.38, 48.45)} },
{'take_image': {'size': (24.24, 5.72), 'position': (12.54, 48.59)} },

{'set_roi': {'size': (24.24, 5.72), 'position': (38.39, 55.83)} },
{'set_filter': {'size': (24.24, 5.72), 'position': (64.66, 55.83)} },
{'set_name': {'size': (24.24, 5.72), 'position': (12.39, 55.83)} },

{'set_exposure': {'size': (24.24, 5.72), 'position': (12.39, 63.36)} },
{'move_z': {'size': (24.24, 5.72), 'position': (38.52, 63.36)} },
{'refresh_power': {'size': (24.24, 5.72), 'position': (64.66, 63.36)} },

{'manage_power': {'size': (24.24, 5.72), 'position': (12.39, 70.89)} },
{'toggle_shutter': {'size': (24.24, 5.72), 'position': (39.07, 70.89)} },
{'daq_settings': {'size': (24.24, 5.72), 'position': (64.61, 70.74)} },
{'setup_settings': {'size': (24.24, 5.72), 'position': (38.48, 78.42)} },]

canvas = {'size': (67.73, 31.75)}

dict_list = [
    {'production': {'size': (20.44, 30.42), 'position': (45.53, 1.19)}},
    {'mass_filtering': {'size': (13.42, 30.55), 'position': (32.37, 1.19)}},
    {'steering': {'size': (16.03, 30.56), 'position': (16.27, 1.13)}},
    {'thermalization': {'size': (13.19, 30.64), 'position': (4.18, 1.12)}},
    {'microscopy_chamber': {'size': (9.1, 30.81), 'position': (0.0, 1.12)}},
]

canvas = {'size': (113.52, 92.11)}
dict_list = [
    {'updateDb': {'size': (34.17, 16.49), 'position': (8.65, 9.96)}},
    {'wi': {'size': (34.17, 16.49), 'position': (45.49, 9.96)}},
    {'ma': {'size': (34.17, 16.49), 'position': (8.65, 28.69)}},
    {'conjugation': {'size': (34.17, 16.49), 'position': (45.49, 28.91)}},
    {'viewTeam': {'size': (34.17, 16.49), 'position': (8.65, 47.42)}},
    {'cloze': {'size': (34.17, 16.49), 'position': (45.49, 47.57)}},
    {'langSelect': {'size': (31.39, 14.73), 'position': (8.85, 66.4)}},
    {'settings': {'size': (31.39, 14.73), 'position': (40.83, 66.45)}}]

canvas = {'size': (36.12, 27.2)}
dict_list = [
    {'stm': {'size': (8.2, 15.0), 'position': (3.2, 0.44)}},
    {'xps': {'size': (10.4, 15.0), 'position': (12.9, 0.44)}},
    {'afm': {'size': (8.2, 15.0), 'position': (24.7, 0.44)}},
    {'nexafs': {'size': (22.4, 10.1), 'position': (6.9, 16.52)}},
    ]

canvas = {'size': (67.73, 38.1)}  
dict_list = [
    {'preparation': {'size': (19.6, 30.2), 'position': (0.16, 3.23)}},
    {'characterization': {'size': (18.85, 30.2), 'position': (20.7, 3.23)}},
    {'results': {'size': (26.6, 30.2), 'position': (40.64, 3.23)}},
]

canvas = {'size': (36.12, 27.2)}
dict_list = [
    {'membrane': {'size': (6.45, 5.18), 'position': (2.51, 21.81)} },
    {'scrolls': {'size': (13.1, 5.7), 'position': (6.6, 21.26)} },
    {'turbos': {'size': (11.78, 10.25), 'position': (8.46, 13.6)} },
    {'ion_pump': {'size': (5.3, 7.2), 'position': (20.75, 17.34)}},
    {'manipulators1': {'size': (13.9, 5.37), 'position': (0.56, 10.65)} },
    {'manipulators2': {'size': (14.88, 9.38), 'position': (17.6, 8.76)} },
    {'microbalance': {'size': (4.86, 6.5), 'position': (14.23, 6.5)} },
    {'sputter': ({'size': (3.6, 6.4), 'position': (10.9, 4.1) } )},
    {'plasma': {'size': (7.5, 8.7), 'position': (23.2, 2.09)} },
    {'analyzer': {'size': (7.9, 7.35), 'position': (16.91, 0.30)} },          
]

canvas = {'size': (144.5, 108.37)}
dict_list = [
    {'import': {'size': (29.66, 30.82), 'position': (1.28, 12.37)} },
    {'background': {'size': (21.51, 35.82), 'position': (35.64, 7.38)} },
    {'align': {'size': (25.57, 27.26), 'position': (60.55, 15.93)} },
    {'integrate': {'size': (20.92, 29.4), 'position': (90.82, 13.79)} },
    {'fitting': {'size': (25.59, 29.4), 'position': (117.63, 13.86)} },
    {'txps': {'size': (25.59, 40.9), 'position': (1.23, 66.35)} },
    {'nexafs': {'size': (23.1, 37.92), 'position': (29.2, 69.35)} },
    {'ali': {'size': (23.1, 39.8), 'position': (56.6, 67.5)} },
    {'qcm': {'size': (31.1, 39.8), 'position': (82.4, 67.5)} },
    {'rga': {'size': (26.9, 38.4), 'position': (116.32, 68.87)} },
]
for d in dict_list:
    for key in d:
        print(f"{key}: {to_percentage(d[key], canvas)}")